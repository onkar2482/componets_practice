import { DataGrid } from "../../componets-libary/data-grid"
export function PropsDemo2(){
    return(
        <div className="container-fluid">
                <DataGrid theme={`table-primary`} caption="Empolyee Table-Updated Nov 2023" fields={["firstname","lastname","designation"]} data={[{firstname:"raj",lastname:"kumar",designation:"manager"},{firstname:"onkar",lastname:"suryawanshi",designation:"Developer"}]} />
                 <DataGrid theme={`table-warning`} caption="Product Deatails" fields={["Productname","quantity","price"]} data={[{productname:"laptophp",quantity:"2",price:"100000"},{productname:"laptophp",quantity:"2",price:"100000"}]} />
        </div>
    )
}