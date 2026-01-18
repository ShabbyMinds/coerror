"use client";

import React from "react";

import { CodeBlock } from "@/components/ui/code-block";

export default function CodeBlockDemoSecond() {
    const rustCode = `use coerror::Monitor;

fn main() {
    // Initialize monitoring with your API key
    let monitor = Monitor::init("dummy-api-key-12345");
    
    // Your application code here
    println!("Monitoring active...");
    
    // Simulate an error
    coerror::capture_error("Something went wrong!");
}
`;

    const cargoToml = `[package]
name = "my-app"
version = "0.1.0"
edition = "2021"

[dependencies]
coerror = "0.1.0"
`;

    return (
        <div className="max-w-3xl mx-auto w-full">
            <CodeBlock
                language="rust"
                filename="main.rs"
                tabs={[
                    { name: "main.rs", code: rustCode, language: "rust", highlightLines: [5] },
                    {
                        name: "Cargo.toml",
                        code: cargoToml,
                        language: "toml",
                        highlightLines: [6],
                    },
                ]}
            />
        </div>
    );
}
