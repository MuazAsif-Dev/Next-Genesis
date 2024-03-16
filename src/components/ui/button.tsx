import {
	Button as NextButton,
	ButtonProps,
	extendVariants,
	VariantProps,
} from "@nextui-org/react";
import { forwardRef } from "react";

export const CustomButton = extendVariants(NextButton, {
	variants: {
		color: {
			danger: "bg-[#ff4081] hover:bg-[#c2185c] hover:!opacity-100",
		},
	},
	defaultVariants: {
		radius: "none",
		color: "danger",
		className: "rounded-[3px]",
	},
});

type ButtonVariantProps = VariantProps<typeof CustomButton>;

type MergedProps = ButtonVariantProps &
	Omit<ButtonProps, keyof ButtonVariantProps>;

const Button = forwardRef<HTMLButtonElement, MergedProps>(function Button(
	{ ...otherProps },
	ref,
) {
	return <CustomButton ref={ref} {...otherProps} />;
});

export default Button;
