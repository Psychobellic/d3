import { DropdownSelect } from '../../styles';

const Dropdown = ({ id, handleChange, options, selectedValue }: any) => {
	return (
		<DropdownSelect id={id} onChange={handleChange} value={selectedValue}>
			{options.map(({ name, label }: any) => {
				return (
					<option key={id + '+' + name} value={name}>
						{label}
					</option>
				);
			})}
		</DropdownSelect>
	);
};

export default Dropdown;