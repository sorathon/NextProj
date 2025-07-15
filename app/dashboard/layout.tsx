export default function Dashboardlayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-grow p-4">{children}</main>
     
    </div>
  );


}