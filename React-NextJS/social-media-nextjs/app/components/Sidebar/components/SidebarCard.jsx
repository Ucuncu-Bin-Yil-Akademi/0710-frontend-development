export default function SidebarCard({ title, component }) {
  return (
    <>
      <div className="bg-gray-100 border rounded">
        <h4 className="text-xl text-center font-semibold text-gray-600 border-b-2 py-3">
          {title}
        </h4>
        <div className="p-2">{component}</div>
      </div>
    </>
  );
}
