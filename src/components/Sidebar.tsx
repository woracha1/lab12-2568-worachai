import { NavLink as RouterNavLink } from "react-router-dom";
import {
  NavLink,
  Stack,
  Box,
  Avatar,
  Indicator,
  Text,
  Group,
} from "@mantine/core";
interface SidebarComponentProps {
  userName: string;
  type?: "admin" | "student";
}
export type { SidebarComponentProps };
export default function Sidebar() {
  return (
    <Stack
      align="stretch"
      justify="space-between"
      gap="md"
      style={{ height: "100%" }}
    >
      {/* Menu / เมนู*/}
      <Box>
        <NavLink
          color="cyan"
          label="Home"
          component={RouterNavLink}
          to="/"
          active
        />
        <NavLink
          color="cyan"
          label="About"
          component={RouterNavLink}
          to="/about"
        />
        {/* ตัวอย่าง ใช้ Navlink กับ  components อื่นๆ ของ mantine */}
        {/* <Text component={RouterNavLink} to="/">
          Test
        </Text> */}
      </Box>
      {/* แสดงผู้ใช้งาน */}
      <Box p={10}>
        <Group>
          <Indicator
            inline
            size={16}
            offset={7}
            position="bottom-end"
            color="red"
            withBorder
          >
            <Avatar
              size="lg"
              radius="xl"
              src="https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/310918619_1283255075771324_981002859411167797_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEpNLxVPG38FfyLYJ412aoMH6bqLCBQ2swfpuosIFDazOYV0ChvjcO87bK233eMTfE9xR8jKB-i4ckxBaNVJXY7&_nc_ohc=TjZ9ccumxusQ7kNvwFjOeBJ&_nc_oc=AdlN_dHmf8OlzjMNBvRFKJEzakpqyyKC26TK2D8e_8V_K0q2Nei-4qtXlOCPG4V7wCY&_nc_zt=23&_nc_ht=scontent.fcnx1-1.fna&_nc_gid=T6Z_JzSxVrTOJvTWjiMeFQ&oh=00_AfW9G2hRf9I7IBjMXWsIwLpyGM-KDCXjr0aV-M3lAX02Kg&oe=68BB7871"
            />
          </Indicator>
          <Text>User : Worachai : Admin </Text>
        </Group>
      </Box>
    </Stack>
  );
}
