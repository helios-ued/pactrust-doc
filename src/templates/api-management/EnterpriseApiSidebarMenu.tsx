import { Menu, MenuItem, MenuSubStack } from "@/components/Menu/Menu";

/** 企业后台原型 · 侧栏导航（API 管理选中） */
export function EnterpriseApiSidebarMenu() {
  return (
    <Menu menuType="Sidebar" menuSize="Default" embedded>
      <MenuItem level={1} iconId="eds-action-box" unfold showIcon>
        资产管理
      </MenuItem>
      <MenuSubStack>
        <MenuItem level={2}>我的资产</MenuItem>
        <MenuItem level={2}>交易流水</MenuItem>
      </MenuSubStack>

      <MenuItem level={1} iconId="eds-action-globe" unfold showIcon>
        全球汇款
      </MenuItem>
      <MenuSubStack>
        <MenuItem level={2}>汇款记录</MenuItem>
        <MenuItem level={2}>收款方</MenuItem>
        <MenuItem level={2}>付款方</MenuItem>
      </MenuSubStack>

      <MenuItem level={1} iconId="eds-other-file" selected showIcon>
        API管理
      </MenuItem>

      <MenuItem level={1} iconId="eds-other-inbox" unfold showIcon>
        团队设置
      </MenuItem>
      <MenuSubStack>
        <MenuItem level={2}>企业信息</MenuItem>
        <MenuItem level={2}>成员管理</MenuItem>
        <MenuItem level={2}>权限管理</MenuItem>
      </MenuSubStack>
    </Menu>
  );
}
