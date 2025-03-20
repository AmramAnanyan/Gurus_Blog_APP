interface SpinnerProps {
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ className }) => {
  return (
    <div
      className={`animate-spin h-12 w-12 border-4 border-gray-200 border-t-gray-700 rounded-full ${
        className || ''
      }`}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
