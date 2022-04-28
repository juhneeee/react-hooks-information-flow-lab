function Filter ({cb}) {
    return <select name="filter" onChange={cb}>
    <option value="All">Filter by category</option>
    <option value="Produce">Produce</option>
    <option value="Dairy">Dairy</option>
    <option value="Dessert">Dessert</option>
  </select>
}

export default Filter;