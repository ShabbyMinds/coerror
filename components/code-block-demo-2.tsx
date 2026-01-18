"use client";

import React from "react";

import { CodeBlock } from "@/components/ui/code-block";

export default function CodeBlockDemoSecond() {
    const rustCode = `use coerror::Monitor;
use std::{thread, time::Duration};

fn main() {
    // 1. Initialize monitoring with your unique API key
    let _monitor = Monitor::init("coerror-user-45-ajd3j5mnkja9fcc6162");
    
    println!("🚀 Service starting...");

    // 2. Your application logic runs as normal
    let handler = thread::spawn(|| {
        println!("Worker thread processing data...");
        thread::sleep(Duration::from_secs(1));
        
        // 3. Automatic panic capture
        // This crash will be instantly reported to your dashboard!
        panic!("Critical failure: Database connection timeout"); 
    });

    handler.join().unwrap_or(()); 
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
        <div className="max-w-3xl mx-auto w-full space-y-4">
            <div className="text-center space-y-4 mb-12">

                <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 tracking-tight text-balance">
                    Just one line of code to capture <br className="hidden md:block" />
                    every crash, panic, and error.
                </h2>
            </div>

            <CodeBlock
                language="rust"
                filename="main.rs"
                tabs={[
                    { name: "main.rs", code: rustCode, language: "rust", highlightLines: [6, 17] },
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
