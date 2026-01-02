import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `DropDownMenu`.
 */
export type DropDownMenuProps = SliceComponentProps<Content.DropDownMenuSlice>;

/**
 * Component for "DropDownMenu" Slices.
 */
const DropDownMenu = ({ slice }: DropDownMenuProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for drop_down_menu (variation: {slice.variation})
      Slices
    </section>
  );
};

export default DropDownMenu;
