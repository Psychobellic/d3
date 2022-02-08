import { DropdownSelect, Option } from '../../styles';

const Dropdown = ({ id, handleChange, options }: any) => {
	return (
		<DropdownSelect
			id={id}
			onChange={handleChange}
			style={{
				fontSize: '1.125rem',
				fontFamily: 'Rowdies',
				textAlign: 'center',
			}}>
				<Option disabled>Select...</Option>
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