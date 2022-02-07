const Dropdown = ({ id, handleChange, options, selectedValue }: any) => {
	return (
		<select id={id} onChange={handleChange} value={selectedValue}>
			{options.map(({ name, label }: any) => {
				return (
					<option key={id + '+' + name} value={name}>
						{label}
					</option>
				);
			})}
		</select>
	);
};

export default Dropdown;