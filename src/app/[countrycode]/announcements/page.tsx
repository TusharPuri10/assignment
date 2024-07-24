import { Announcement } from "@/lib/interface";
import Content from "@/components/announcement/content";
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

export default async function Page() {
  const data: Announcement[] = await fetchData();

  return (
    <main className=" h-[calc(100vh-82px)]">
      <Content data={data} />
    </main>
  );
}