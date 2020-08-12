const handleModule={
    getRouter(permissionList = [], allRouter = []) {
        // console.log(permissionList)
    // permissions 的格式为 ["deploy-manage", "system-log"]
        let permissions = permissionList.reduce((acc, cur) => {
            // console.log(acc)
              if (cur.moduleList && cur.moduleList.length > 0) cur = cur.moduleList;
               return acc.concat(cur);
               
        }, []).map(v => v.requestMapping);
        // console.log(permissions)
        //把动态添加的权限路由和permission进行对比和过滤
        return allRouter.filter(item => permissions.includes(item.meta.permitName));
      
        
    },


    // 转换左侧栏
    getSidebarMenu(permissionList=[]){
        // console.log(permissionList)
        let sidebarMenu=[];
        permissionList.forEach(item=>{
            let menuItem={
                name:item.requestMapping,
                title:item.moduleGroupName
            };
            menuItem.children=(item.moduleList||[]).map(child=>({
                name:child.requestMapping,
                title:child.moduleName
            }));
            sidebarMenu.push(menuItem)
        });
        //  console.log(sidebarMenu)
         return sidebarMenu
    }
   
}
export default handleModule