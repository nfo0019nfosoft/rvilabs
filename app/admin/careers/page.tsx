"use client";

import { useEffect, useState } from "react";
import styles from "./careers.module.css";

type Career = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  message: string;
  resume: string;
  createdAt: string;
};

export default function AdminCareersPage() {
  const [data, setData] = useState<Career[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/careers`);
      const result = await res.json();
      setData(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className={styles.container}>
      <h1>📄 Career Applications</h1>

      <div className={styles.table}>
        {data.map((item) => (
          <div key={item._id} className={styles.card}>
            
            <h3>{item.name}</h3>
            <p><b>Email:</b> {item.email}</p>
            <p><b>Phone:</b> {item.phone}</p>
            <p><b>Position:</b> {item.position}</p>
            <p><b>Message:</b> {item.message}</p>

            <a
             href={`${process.env.NEXT_PUBLIC_API_URL}/uploads/${item.resume}`}
              target="_blank"
              className={styles.btn}
            >
              📥 Download Resume
            </a>

            <span className={styles.date}>
              {new Date(item.createdAt).toLocaleString()}
            </span>

          </div>
        ))}
      </div>
    </div>
  );
}