import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addTodo } from "@/redux/feature/TodoSlice"
import { FormEvent, useState } from "react"
import { useDispatch } from "react-redux"

export function TodoModal() {
  const [tasks,setTasks] = useState('');
  const [description,setDescription] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (e:FormEvent) =>{
    e.preventDefault();
    const randomString =Math.random().toString(36).substring(2,7)
    const TodoDetails = {
      id:randomString,
      title:tasks,
      description:description
    }
      dispatch(addTodo(TodoDetails))
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={onSubmit}>
        <DialogHeader>
          <DialogTitle>Please Add your favorite Todo</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="tasks" className="text-right">
              Tasks
            </Label>
            <Input onBlur={(e) => setTasks(e.target.value)} id="tasks" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input onBlur={(e) => setDescription(e.target.value)} id="description" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
        </form>
        
      </DialogContent>
    </Dialog>
  )
}
