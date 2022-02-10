import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Hoe moet je spelen" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Raad de afkorting van de docent in 8 keer. Na elke gok, veranderd de kleur 
        van de letters om te laten zien hoe dichtbij je was.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="H" status="correct" />
        <Cell value="A" />
        <Cell value="M" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        De letter H zit in de afkorting en staat op de goed plaats.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="K" />
        <Cell value="I" />
        <Cell value="R" status="present" />
        <Cell value="J" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        De letter R zit in de afkorting, maar op de verkeerde plaats.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="V" />
        <Cell value="R" />
        <Cell value="H" />
        <Cell value="F" status="absent" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        De letter F zit niet in de afkorting.
      </p>
    </BaseModal>
  )
}
