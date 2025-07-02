import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const RlsPolicyTester = () => {
  const [testResults, setTestResults] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const runTests = async () => {
    setLoading(true);
    setTestResults({});

    // Test 1: Select only username and email (should succeed)
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("username, email");
      setTestResults((prev: any) => ({
        ...prev,
        test1: {
          query: "SELECT username, email FROM profiles (as public)",
          status: error ? "Failed" : "Success",
          data: data,
          error: error?.message,
        },
      }));
    } catch (e: any) {
      setTestResults((prev: any) => ({
        ...prev,
        test1: {
          query: "SELECT username, email FROM profiles (as public)",
          status: "Error",
          error: e.message,
        },
      }));
    }

    // Test 2: Select a restricted column like first_name (should return null/undefined for that column)
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("first_name");
      setTestResults((prev: any) => ({
        ...prev,
        test2: {
          query: "SELECT first_name FROM profiles (as public)",
          status: error ? "Failed" : "Success (but column should be empty)",
          data: data,
          error: error?.message,
        },
      }));
    } catch (e: any) {
      setTestResults((prev: any) => ({
        ...prev,
        test2: {
          query: "SELECT first_name FROM profiles (as public)",
          status: "Error",
          error: e.message,
        },
      }));
    }

    // Test 3: Select all columns '*' (should only return username and email)
    try {
      const { data, error } = await supabase.from("profiles").select("*");
      setTestResults((prev: any) => ({
        ...prev,
        test3: {
          query: "SELECT * FROM profiles (as public)",
          status: error
            ? "Failed"
            : "Success (but restricted columns should be empty)",
          data: data,
          error: error?.message,
        },
      }));
    } catch (e: any) {
      setTestResults((prev: any) => ({
        ...prev,
        test3: {
          query: "SELECT * FROM profiles (as public)",
          status: "Error",
          error: e.message,
        },
      }));
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <Card className="w-full max-w-2xl rounded-lg shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-gray-800">
            RLS Policy Test: Public Column Access
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 text-center">
            This component tests the Supabase RLS policy and `GRANT` statement
            that should allow public read access only to `username` and `email`
            columns of the `profiles` table.
          </p>
          <Button onClick={runTests} disabled={loading} className="w-full">
            {loading ? "Running Tests..." : "Run RLS Tests"}
          </Button>

          {Object.keys(testResults).length > 0 && (
            <div className="space-y-4 pt-4 border-t border-gray-200 mt-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Test Results:
              </h3>
              {Object.values(testResults).map((result: any, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded-md shadow-sm"
                >
                  <p className="font-medium text-gray-700">
                    Query:{" "}
                    <span className="font-mono text-sm bg-gray-200 p-1 rounded">
                      {result.query}
                    </span>
                  </p>
                  <p className="font-medium text-gray-700">
                    Status:{" "}
                    <span
                      className={`font-bold ${
                        result.status.includes("Success")
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {result.status}
                    </span>
                  </p>
                  {result.data && (
                    <p className="font-medium text-gray-700">
                      Data:{" "}
                      <pre className="bg-gray-200 p-2 rounded text-sm overflow-auto">
                        {JSON.stringify(result.data, null, 2)}
                      </pre>
                    </p>
                  )}
                  {result.error && (
                    <p className="font-medium text-red-600">
                      Error:{" "}
                      <span className="font-mono text-sm">{result.error}</span>
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default RlsPolicyTester;
