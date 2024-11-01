import { useMutation } from "@tanstack/react-query"
import ContactService, { IContact } from "../api/ContactService"

export const useContact = () => {
  return useMutation({
    mutationKey: ['contact'],
    mutationFn: (data: IContact) => ContactService.postContact(data.name, data.email, data.message)
  })
}