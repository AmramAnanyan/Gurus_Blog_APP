export const ModalContainer = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick(e: any): void;
}) => (
  <div
    className="fixed inset-0 z-[11] flex h-full min-h-screen w-full items-center justify-center bg-black/60"
    onClick={onClick}
  >
    {children}
  </div>
);

export const ModalContent = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick(e: any): void;
}) => (
  <div
    className="m-2.5 flex h-fit w-full max-w-[500px] flex-col rounded-xl bg-white p-5"
    onClick={onClick}
  >
    {children}
  </div>
);

export const ModalButtons = ({ children }: { children: React.ReactNode }) => (
  <div className="flex justify-around py-3.75">{children}</div>
);

export const ModalInputWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => <div className="flex flex-col gap-1">{children}</div>;

export const ModalInputItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex justify-center">{children}</div>
);
