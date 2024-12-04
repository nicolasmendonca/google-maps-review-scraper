import { Review } from "./src/types";

export interface ScraperOptions {
  sort_type?: "relevant" | "newest" | "highest_rating" | "lowest_rating";
  search_query?: string;
  pages?: number | "max";
  clean?: boolean;
}

/**
 * Scrapes reviews from a given Google Maps URL.
 *
 * @param url - The URL of the Google Maps location to scrape reviews from.
 * @param options - The options for scraping.
 * @returns Promise resolving to an array of reviews or null if no reviews are found.
 * @throws Error if the URL is not provided or if fetching reviews fails.
 */
export function scraper(
  url: string,
  options?: ScraperOptions
): Promise<Review[] | null>;
