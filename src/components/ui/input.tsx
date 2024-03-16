import {
	extendVariants,
	Input as NextInput,
	InputProps,
	VariantProps,
} from "@nextui-org/react";
import { FC, forwardRef } from "react";

const CustomInputVariants = extendVariants(NextInput, {
	variants: {
		variant: {
			custom: {
				// base: ["br500"],
				// mainWrapper: ["br500"],
				inputWrapper: [
					// "bg-blue-100",
					"border",
					"border-blue-400",
					// "shadow",
					"transition-colors",
					// "focus-within:bg-blue-100",
					"data-[hover=true]:border-blue-600",
					// "data-[hover=true]:bg-blue-100",
					"group-data-[focus=true]:border-blue-600",
				],
				input: [
					"text-zinc-800",
					"placeholder:text-zinc-500",
					"placeholder:px-0",
				],
			},
		},

		color: {
			// stone: {
			//   inputWrapper: [
			//     "bg-zinc-100",
			//     "border",
			//     "shadow",
			//     "transition-colors",
			//     "focus-within:bg-zinc-100",
			//     "data-[hover=true]:border-zinc-600",
			//     "data-[hover=true]:bg-zinc-100",
			//     "group-data-[focus=true]:border-zinc-600",
			//   ],
			//   input: ["text-zinc-800", "placeholder:text-zinc-600"],
			// },
		},
		size: {
			xs: {
				inputWrapper: "h-unit-6 min-h-unit-6 px-1",
				input: "text-tiny",
			},
			md: {
				inputWrapper: "h-unit-10 min-h-unit-10",
				input: "text-small",
			},
			xl: {
				inputWrapper: "h-unit-14 min-h-unit-14",
				input: "text-medium",
			},
		},
		radius: {
			xs: {
				inputWrapper: "rounded",
			},
			sm: {
				inputWrapper: "rounded-[4px]",
			},
		},
		textSize: {
			base: {
				input: "text-base",
			},
		},
		removeLabel: {
			true: {
				label: "hidden",
			},
			false: {},
		},
	},
	defaultVariants: {
		variant: "bordered",
		// color: "stone",
		textSize: "base",
		removeLabel: true,
	},
});

type InputVariantProps = VariantProps<typeof CustomInputVariants>;
// type InputSlots = keyof ReturnType<typeof CustomInputVariants>;

type MergedProps = InputVariantProps &
	Omit<InputProps, keyof InputVariantProps>;

const Input: FC<MergedProps> = forwardRef(function Input(
	{ ...otherProps },
	ref,
) {
	return <CustomInputVariants ref={ref} {...otherProps} />;
});

export default Input;
