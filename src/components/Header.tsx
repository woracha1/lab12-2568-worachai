import {
  Burger,
  Title,
  useMantineColorScheme,
  Group,
  ActionIcon,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconSun, IconMoon } from "@tabler/icons-react";

interface HeaderComponentProps {
  opened: boolean;
  toggle: () => void;
}

export default function HeaderComponent({
  opened,
  toggle,
}: HeaderComponentProps) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Group p="md" justify="space-between">
      <Group>
        {isMobile && (
          <Burger
            opened={opened}
            onClick={toggle}
            aria-label="Toggle navigation"
          />
        )}
        <Title order={3}>🚀 My App Header</Title>
      </Group>
      <Group gap={5}>
        <ActionIcon
          variant="filled"
          color={isDark ? "yellow" : "blue"}
          onClick={toggleColorScheme}
          size="lg"
          aria-label={isDark ? "Light mode" : "Dark mode"}
        >
          {isDark ? <IconSun size={20} /> : <IconMoon size={20} />}
        </ActionIcon>
      </Group>
    </Group>
  );
}
