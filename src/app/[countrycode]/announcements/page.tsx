import { Announcement } from "@/lib/interface";
import Main from "@/components/announcements/main";
const fetchData = async () => {
  try {
    const baseUrl = "http://localhost:3000"; // Replace with your actual base URL
    const response = await fetch(
      `${baseUrl}/announcements-assigment-data.json`,
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default async function Page({ params }: { params: { countrycode: string } }) {
  const data: Announcement[] = await fetchData();
  const sortedData = data.slice(0,100).sort((a, b) => new Date(b.published_time.$date).getTime() - new Date(a.published_time.$date).getTime());
  return (
    <Main data={sortedData} countrycode={params.countrycode}/>
  );
}