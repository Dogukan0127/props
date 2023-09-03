import { useState } from "react"

function Tab({ children, activeTab }) {
    const [active, setActive] = useState(activeTab);
    return (
        <div>
            <nav>
                {children.map((tab, index) =>
                    <button
                        onMouseMove={() => setActive(index)}
                        className={active == index ? "red" : "yellow"}
                        key="index"
                    >

                        {tab.props.title}</button>)}
            </nav>
            {children}
        </div>
    )
}


Tab.Panel = function ({ children, title }) {
    return (
        <div>{children}</div>
    )
}


export default Tab