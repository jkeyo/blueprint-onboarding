import supabase from '../client';
import { PostProps } from '../../../src/components/Post';

// Example query to fetch all rows from your_table_name
export async function fetchAllRows() {
  const { data, error } = await supabase.from('your_table_name').select('*');

  if (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }

  return data;
}

export async function getAllPosts(): Promise<PostProps[]> {
  const { data, error } = await supabase.from('Posts').select('*');
  
  // handle all errors
  if (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }

  const locationMap: Record<number, { city: string, state: string }> = {
    1: { city: "San Francisco", state: "CA" },
    2: { city: "Oakland", state: "CA" }
  };
  
  const formattedData = data.map((row: any) => ({
    username: row.user_name,
    npo: row.npo_name,
    city: locationMap[row.location_id]?.city || "Unknown City",
    state: locationMap[row.location_id]?.state || "CA",
    text: row.post_text,
    image: row.image_link,
    likeCount: row.num_likes
  }));

  return formattedData;
}