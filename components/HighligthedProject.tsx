"use client";
import { CardBlock } from "./Card";

export function HighlightedProjects() {
    return (
        <div className="w-full">
            <div className="ml-10 text-2xl font-bold mb-10 mt-20">
                Highlighted Projects
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-30 gap-y-10 ml-20 mr-20">
                <CardBlock
                    badgeText="React Native"
                    cardDescription="A sign language translation app that interfaces with a custom-built SignGlove via BLE, leveraging edge computing with a GRU model to deliver real-time, low-latency gesture recognition."
                    cardTitle="SignGo"
                    imgUrl=""
                    badgeVariant="default"
                />
                {
                //wait for KU-SOC confirm
                //<CardBlock
                //    badgeText="C++"
                //    cardDescription="A competitive programming project focused on algorithmic optimization, utilizing GPU acceleration, multi-threading, and advanced performance techniques to maximize throughput."
                //    cardTitle="NAPROCK 17th"
                //    imgUrl=""
                //    badgeVariant="default"
                ///>
                }
                <CardBlock
                    badgeText="C++"
                    cardDescription="A competitive programming project focused on algorithmic optimization, utilizing GPU acceleration, multi-threading, and advanced performance techniques to maximize throughput."
                    cardTitle="NAPROCK 17th"
                    imgUrl=""
                    badgeVariant="destructive"
                />
                <CardBlock
                    badgeText="Rust + Vue"
                    cardDescription="An OCR pipeline with a high-performance Rust backend, employing image compression and parallel computation to significantly reduce processing time and improve accuracy."
                    cardTitle="QuikScore"
                    imgUrl=""
                    badgeVariant="link"
                />
                <CardBlock
                    badgeText="React + Express.js"
                    cardDescription="A real-time chat application built with WebSockets for live messaging and cloud storage integration for seamless image file sharing."
                    cardTitle="Chat App"
                    imgUrl=""
                    badgeVariant="ghost"
                />
            </div>
        </div>
    );
}