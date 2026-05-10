function List({ items = [], category="Catagory" }) {
  return (
    <div>
      {category ? <h3>{category}</h3> : null}
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}: <b>{item.calories}</b>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;