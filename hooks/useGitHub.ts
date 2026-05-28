"use client";

import { useEffect, useState } from "react";

export function useGitHub() {
    const [calendar, setCalendar] = useState(null);
    const [repos, setRepos] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function load() {
            try {
                const res = await fetch("api/github");
                const { calendar, repos } = await res.json();
                setCalendar(calendar);
                setRepos(repos);
                setLoading(false);
            } catch (error: any) {
                setError(error.message);
                setLoading(false);
            }
        }
        load();
    }, []);

    return { calendar, repos, loading, error };
}