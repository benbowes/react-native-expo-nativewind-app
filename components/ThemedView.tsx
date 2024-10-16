import { View, type ViewProps } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);

export type ThemedViewProps = ViewProps & {
  className?: string;
  variant?: "section" | "title";
};

export function ThemedView({
  className = "",
  variant = "section",
  ...otherProps
}: ThemedViewProps) {
  const variantClasses = {
    title: "flex flex-row items-center gap-2",
    section: "flex gap-2 mb-4",
  }[variant];
  return (
    <StyledView className={`${variantClasses} ${className}`} {...otherProps} />
  );
}
