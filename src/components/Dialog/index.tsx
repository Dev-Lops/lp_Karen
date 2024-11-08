// CustomDialog/index.tsx
import React from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { Cross2Icon } from "@radix-ui/react-icons"
import {
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  Fieldset,
  Label,
  Input,
  Button,
  IconButton,
} from "./styles"

interface CustomDialogProps {
  title: string
  description: string
  defaultName: string
  defaultUsername: string
  onSave: () => void
  img: string
}

export const CustomDialog: React.FC<CustomDialogProps> = ({
  title,
  description,
  defaultName,
  defaultUsername,
  onSave,
  img,
}) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <Button className='violet'>Edit profile</Button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <DialogOverlay />
      <DialogContent>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
        <Fieldset>
          <Label htmlFor='name'>Name</Label>
          <Input id='name' defaultValue={defaultName} />
        </Fieldset>
        <Fieldset>
          <Label htmlFor='username'>Username</Label>
          <Input id='username' defaultValue={defaultUsername} />
          <img src={img} alt='User profile' />
        </Fieldset>
        <div
          style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}
        >
          <Dialog.Close asChild>
            <Button className='green' onClick={onSave}>
              Save changes
            </Button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <IconButton aria-label='Close'>
            <Cross2Icon />
          </IconButton>
        </Dialog.Close>
      </DialogContent>
    </Dialog.Portal>
  </Dialog.Root>
)
