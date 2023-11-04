interface LoadingUIProps {
  isLoading: boolean;
}

function LoadingUI({ isLoading }: LoadingUIProps) {
  return (
    <div
      className="fixed left-0 z-10 flex h-full w-full justify-center bg-gray-500/20 aria-hidden:hidden"
      aria-hidden={!isLoading}
    >
      <span className="loading loading-spinner w-32 text-primary"></span>
    </div>
  );
}

export default LoadingUI;
