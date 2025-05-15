import { useTitle } from "../../hooks/useTitle"
import DashBoardCard from "./components/DashBoardCard"
import DashBoardEmpty from "./components/DashBoardEmpty"

const DashBoardPage = () => {

    const orders = true
    useTitle("Dashboard")


  return (
    <main>
        <section className="px-5">
            <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
                    My Dashboard
            </p>
        </section>

        <section>
            {orders && (
                <div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <DashBoardCard />
                        <DashBoardCard />
                        <DashBoardCard />
                    </div>

                </div>
            )}
        </section>

        <section>
            {!orders && <DashBoardEmpty/>}
        </section>
      
    </main>
  )
}

export default DashBoardPage