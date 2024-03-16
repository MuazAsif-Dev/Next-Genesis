import {
	Modal as NextModal,
	ModalBody,
	ModalBodyProps as NextModalBodyProps,
	ModalContent,
	ModalContentProps as NextModalContentProps,
	ModalFooter,
	ModalFooterProps as NextModalFooterProps,
	ModalHeader,
	ModalHeaderProps as NextModalHeaderProps,
	ModalProps as NextModalProps,
} from "@nextui-org/react";

import Button from "@/components/ui/button";

type ModalPropsType = {
	ContentProps?: NextModalContentProps;
	HeaderProps?: NextModalHeaderProps;
	HeaderContent?: React.ReactNode;
	BodyProps?: NextModalBodyProps;
	FooterProps?: NextModalFooterProps;
	FooterContent?: React.ReactNode;
	handleSubmit?: () => void;
} & NextModalProps;

export default function Modal({
	ContentProps,
	HeaderProps,
	HeaderContent,
	BodyProps,
	FooterProps,
	FooterContent,
	children,
	onClose,
	handleSubmit,
	...ModalProps
}: ModalPropsType) {
	return (
		<NextModal
			radius="none"
			placement="center"
			classNames={{ closeButton: "text-white hover:text-black" }}
			{...ModalProps}
		>
			<ModalContent {...ContentProps}>
				<>
					{HeaderContent && (
						<ModalHeader
							className="flex flex-col gap-1 bg-[#ff4082] font-light text-white"
							{...HeaderProps}
						>
							{HeaderContent}
						</ModalHeader>
					)}
					<ModalBody {...BodyProps}>{children}</ModalBody>
					{FooterContent ? (
						<ModalFooter {...FooterProps}>{FooterContent}</ModalFooter>
					) : (
						<div className="flex justify-end gap-6 p-8">
							<Button variant="light" color="default" onPress={onClose}>
								Close
							</Button>
							<Button
								color="danger"
								onPress={handleSubmit}
								className="rounded-[0.2rem] px-10"
							>
								SAVE
							</Button>
						</div>
					)}
				</>
			</ModalContent>
		</NextModal>
	);
}
