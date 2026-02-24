export default function FancyLoader() {
  return (
    <span className="relative flex w-4 h-4">
      <span className="absolute inline-flex w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-75 animate-ping"></span>
      <span className="relative inline-flex rounded-full w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse shadow-lg"></span>
    </span>
  );
}
