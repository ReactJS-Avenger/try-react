import React, { useCallback, useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";


//to check the performance
//updating the one component will render all other component 
//it will render 20/30 component will be cause performace problem
// you can observe logs with button click. which will render all component
// we need to render only compoennt whic is updated. not all

const ParentComponent = () => {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])
    // in the above case we have returned the cached fucntion. This is returned only when dependecy is changed
    

    return (
        <div>
            <Title />
            <Count text='Age' count={age} />
            <Button handleClick={incrementAge}>incrementAge</Button>
            <Count text='salary' count={salary} />
            <Button handleClick={incrementSalary}>incrementSalary</Button>
        </div>
    )
}
export default ParentComponent;