import { useQuery } from "@tanstack/react-query";

export const useShowcaseQuery = (enabled: boolean = true) => {
  return useQuery({
    queryKey: ["showcase"],
    queryFn: async () => {
      const res = await fetch("/api/showcase");
      if (!res.ok) throw new Error("Failed to load showcase");
      return res.json();
    },
    enabled,
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
  });
};
