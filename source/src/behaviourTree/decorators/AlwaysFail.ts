///<reference path="./Decorator.ts"/>
module behaviourTree {
    /**
     * 将总是返回失败，除了当子任务正在运行时
     */
    export class AlwaysFail<T> extends Decorator<T>{
        public update(context: T): TaskStatus{
            Assert.isNotNull(this.child, "child必须不能为空");
    
            let status = this.child.update(context);
    
            if (status == TaskStatus.Running)
                return TaskStatus.Running;
    
            return TaskStatus.Failure;
        }
    }
}
