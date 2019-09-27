
### git 基础  主分支master1231313

git的基本概念
分布式版本管理工具
git本地仓库
git 远程仓库  githup  码云 私有仓库 公有仓库
gitlab 局域网范围搭建一个远程仓库

git基本指令
git init 初始化一个本地仓库
git clone
git romote add  url 将本地仓库和远程仓库进行关联
git add .  将所有的文件添加到暂存区
git commit -m 'msg' 将暂存区的文件提交本地仓库
git  push origin master 将本地的master 分支提交到远程的master 分支 
git  pull origin  master   下拉更新代码
解决冲突  需要的留着 不要的删掉
git  branch  查看本地分支
git  branch --all 查看本地和远程所有 分支   * 当前选中的分支
git  checkout -b dev  新建并切换一个分支
git  merger  分支名 dev  将 dev分支合并到当前的分支  （合并 下拉）
.gitignore  上传的时候可以忽略某些不需要文件
git log   打印操作信息
git reflog  打印操作信息  看起来清楚 内容也多
git diff   比较工作区与本地仓库的差异
git reset  --hard  版本id   版本的回滚操作
呵呵呵哒


### gitflow jit 工作流

