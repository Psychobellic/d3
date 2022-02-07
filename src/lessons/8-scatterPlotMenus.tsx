import { useState } from "react";

const ScatterPlotMenus = () => {
  const initialState = {
    name:'sepal_length',
    label: 'Sepal Length',
  }

  const [selectedValue, setSelectedValue] = useState({name: initialState.name, label: initialState.label});
  
  }
}

export default ScatterPlotMenus;