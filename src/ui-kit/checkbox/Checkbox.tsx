import { InputHTMLAttributes } from "react";
import styles from "./Checkbox.module.css";

interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	shape?: 'default' | 'rectangle'
}

export const Checkbox: React.FC<ICheckboxProps> = ({ label, shape = 'default', ...props }) => {
	return (
		<label className={`${shape === 'default' ? styles.label : styles.label__rectangle}`}>
			<input
				{...props}
				className={styles.checkbox}
				type="checkbox"
			/>
			{label}
		</label>
	);
}
