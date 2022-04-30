export const Wrapper  = ({
    children,
  })=> {
    return (
        <div className="bg-blue-100 flex items-center p-4 w-screen h-screen justify-center">
        <main className="flex flex-row items-center">
         {children}
        </main>
      </div>
    )
}