"use client";

import { Card, CreateModal } from "@/components/ui";

export default function Home() {
  return (
    <div className="w-full flex justify-center">
      <div className="container">
        <div className="flex justify-end p-6">
          <CreateModal />
        </div>
        <div className="grid grid-cols-3 gap-6">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
