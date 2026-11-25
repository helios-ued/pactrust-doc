import { Menu, MenuGroup, MenuGroupLeafItem } from "@/components/Menu/Menu";

/** 汇款原型 · Sidebar Style 04（分组一级菜单） */
export function RemittanceSidebarMenu() {
  return (
    <Menu menuType="Sidebar" menuSize="Default" embedded>
      <MenuGroup title="资产管理">
        <MenuGroupLeafItem groupTitle="资产管理" label="我的资产" iconId="eds-action-box" />
        <MenuGroupLeafItem groupTitle="资产管理" label="交易流水" iconId="eds-other-file" />
      </MenuGroup>

      <MenuGroup title="全球汇款">
        <MenuGroupLeafItem
          groupTitle="全球汇款"
          label="汇款记录"
          iconId="eds-action-globe"
          selected
        />
        <MenuGroupLeafItem groupTitle="全球汇款" label="收款方" iconId="eds-action-box" />
        <MenuGroupLeafItem groupTitle="全球汇款" label="付款方" iconId="eds-action-box" />
      </MenuGroup>

      <MenuGroup title="系统">
        <MenuGroupLeafItem groupTitle="系统" label="API管理" iconId="eds-other-file" />
        <MenuGroupLeafItem groupTitle="系统" label="企业信息" iconId="eds-other-inbox" />
        <MenuGroupLeafItem groupTitle="系统" label="成员管理" iconId="eds-other-inbox" />
        <MenuGroupLeafItem groupTitle="系统" label="权限管理" iconId="eds-other-inbox" />
        <MenuGroupLeafItem groupTitle="系统" label="充值设置" iconId="eds-action-settings" />
      </MenuGroup>

      <MenuGroup title="个人中心">
        <MenuGroupLeafItem groupTitle="个人中心" label="个人资料" iconId="eds-action-lock" />
        <MenuGroupLeafItem groupTitle="个人中心" label="安全中心" iconId="eds-action-lock" />
      </MenuGroup>
    </Menu>
  );
}
