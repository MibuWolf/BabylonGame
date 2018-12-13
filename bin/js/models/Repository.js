/**
* 仓库
* @author confiner
*/
var models;
(function (models) {
    class Repository extends models.Model {
        constructor(type) {
            super();
            this._directories = null;
            this._type = type;
            this._directories = new Map();
        }
        // 设置当前目录
        set curDirectory(directory) {
            if (this._directories.has(directory))
                this._directory = directory;
        }
        // 获取当前目录
        get curDirectory() {
            return this._directory;
        }
        get type() {
            return this._type;
        }
        // 获取所有目录
        get directories() {
            return this._directories;
        }
        // 获取目录
        getDirectory(directoryName) {
            return this._directories.get(directoryName);
        }
        // 创建默认目录
        createDefaultDirectory() {
            let defaults = Array.from(this._directories.keys()).filter((dirName) => {
                if (dirName.indexOf(Repository._Default_Dir) > -1) {
                    return dirName;
                }
            });
            let name = Repository._Default_Dir + (defaults ? defaults.length : "");
            return this.createDirectory(name, true);
        }
        // 创建目录
        createDirectory(directoryName, tmp = false) {
            if (this.getDirectory(directoryName))
                return null;
            let directory = new models.Directory(directoryName, tmp);
            return directory;
        }
        // 修改目录名称
        changeDirectoryName(oldName, name) {
            let directory = this.getDirectory(oldName);
            if (directory) {
                if (this.getDirectory(name))
                    return false;
                this._directories.delete(oldName);
                directory.changeName(name);
                this._directories.set(name, directory);
                return true;
            }
            return false;
        }
        // 添加目录
        addDirectory(directory) {
            if (this.getDirectory(directory.name))
                return;
            this._directories.set(directory.name, directory);
        }
        // 删除目录
        deleteDirectory(directory) {
            if (this.getDirectory(directory.name)) {
                this._directories.delete(directory.name);
            }
        }
        // 获取仓库目录树数据
        getDirectoriesXMLData() {
            var treeData = "<data>";
            let directory = null;
            let group = null;
            for (let prop of this._directories.keys()) {
                directory = this._directories.get(prop);
                treeData += "<dir label='" + prop + "' level='2' domain='" + this.owner.owner + "' repository_type='" + this._type + "' project='" + this.owner.name + "' tmp='" + directory.tmp + "' editor= '" + !directory.tmp + "' >";
                for (let i = 0, len = directory.groups.length; i < len; ++i) {
                    group = directory.groups[i];
                    treeData += "<file label='" + group.name + (group.tmp ? "" : "(" + group.num + ")")
                        + "' level='3' directory='" + directory.name + "' group='" + group.name + "' domain='" + this.owner.owner + "' repository_type='" + this._type + "' project='" + this.owner.name + "' tmp='" + group.tmp + "'/>";
                }
                treeData += "</dir>";
            }
            treeData += "</data>";
            return treeData;
        }
    }
    Repository._Default_Dir = "Untitled Directory"; // 默认目录名称
    models.Repository = Repository;
})(models || (models = {}));
//# sourceMappingURL=Repository.js.map