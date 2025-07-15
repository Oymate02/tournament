"use client";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";


export default function About() {
    const router = useRouter();
    const setNewView = async () => {
      const { data, error } = await supabase
        .from('views')
        .insert({ 
          name: 'random name' 
        })

      if(data) {
        console.log("View added successfully:", data);
      }
      if(error) {
        console.error("Error adding view:", error);
      }
    };

    setNewView();

    return (
      <div>
        <h1>About Us</h1>
        <button 
          onClick={() => router.push("/")}  
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          Go Home
        </button>
      </div>
    );
}