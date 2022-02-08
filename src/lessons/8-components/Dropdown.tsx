import { DropdownSelect, Option } from '../../styles';

const Dropdown = ({ id, handleChange, options, selectedValue }: any) => {
	return (
		<DropdownSelect id={id} onChange={handleChange} value={selectedValue} style={{fontSize: '1.125rem', fontFamily: 'Rowdies', textAlign: 'center'}}>
			{options.map(({ name, label }: any) => {
				return (
					<Option key={id + '+' + name} value={name}>
						{label}
					</Option>
				);
			})}
		</DropdownSelect>
	);
};

export default Dropdown;