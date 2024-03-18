import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

export function ModalBase({ isOpen, close, tittle, children, size }) {
  return (
    <Modal
      size={size == undefined ? "5xl" : size}
      isDismissable={false}
      placement="center"
      hideCloseButton={true}
      isOpen={isOpen}
      scrollBehavior="inside"
    >
      <ModalContent>
        <ModalHeader className="flex text-2xl flex-col gap-1 items-center text-center">
          {tittle}
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button
            color="danger"
            variant="flat"
            size="lg"
            onPress={() => close()}
          >
            Cerrar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
