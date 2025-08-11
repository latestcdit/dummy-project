import { useState, useEffect } from 'react';
import { supabase } from '@/utils/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface ColumnDefinition {
  key: string;
  header: string;
}

interface AdminTableProps {
  tableName: string;
  columns: ColumnDefinition[];
}

export function AdminTable({ tableName, columns }: AdminTableProps) {
  const [data, setData] = useState<any[]>([]);
  const [newItemName, setNewItemName] = useState('');
  const [editingItem, setEditingItem] = useState<any | null>(null);
  const [editingItemName, setEditingItemName] = useState('');

  useEffect(() => {
    fetchData();
  }, [tableName]);

  const fetchData = async () => {
    const { data, error } = await supabase.from(tableName).select('*');
    if (error) {
      console.error('Error fetching data:', error);
    } else {
      setData(data);
    }
  };

  const handleAddItem = async () => {
    if (!newItemName.trim()) return;
    const { data, error } = await supabase.from(tableName).insert([{ name: newItemName.trim() }]).select();
    if (error) {
      console.error('Error adding item:', error);
    } else if (data) {
      setData((prev) => [...prev, data[0]]);
      setNewItemName('');
    }
  };

  const handleEditItem = async (item: any) => {
    setEditingItem(item);
    setEditingItemName(item.name);
  };

  const handleUpdateItem = async () => {
    if (!editingItem || !editingItemName.trim()) return;
    const { data, error } = await supabase
      .from(tableName)
      .update({ name: editingItemName.trim() })
      .eq('id', editingItem.id)
      .select();
    if (error) {
      console.error('Error updating item:', error);
    } else if (data) {
      setData((prev) => prev.map((item) => (item.id === data[0].id ? data[0] : item)));
      setEditingItem(null);
      setEditingItemName('');
    }
  };

  const handleDeleteItem = async (id: number) => {
    const { error } = await supabase.from(tableName).delete().eq('id', id);
    if (error) {
      console.error('Error deleting item:', error);
    } else {
      setData((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold capitalize">{tableName.replace(/_/g, ' ')}</h2>

      {/* Add New Item Form */}
      <div className="flex items-end space-x-2">
        <div className="grid gap-1.5">
          <Label htmlFor="newItemName">New {tableName.slice(0, -1).replace(/_/g, ' ')} Name</Label>
          <Input
            id="newItemName"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            placeholder={`Enter new ${tableName.slice(0, -1).replace(/_/g, ' ')} name`}
          />
        </div>
        <Button onClick={handleAddItem}>Add</Button>
      </div>

      {/* Data Table */}
      <div className="border rounded-md">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              {columns.map((col) => (
                <th key={col.key} className="p-2 text-left">{col.header}</th>
              ))}
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-t">
                {columns.map((col) => (
                  <td key={col.key} className="p-2">
                    {editingItem && editingItem.id === item.id && col.key === 'name' ? (
                      <Input
                        value={editingItemName}
                        onChange={(e) => setEditingItemName(e.target.value)}
                      />
                    ) : (
                      item[col.key]
                    )}
                  </td>
                ))}
                <td className="p-2 space-x-2">
                  {editingItem && editingItem.id === item.id ? (
                    <Button size="sm" onClick={handleUpdateItem}>Save</Button>
                  ) : (
                    <Button size="sm" variant="outline" onClick={() => handleEditItem(item)}>Edit</Button>
                  )}
                  <Button size="sm" variant="destructive" onClick={() => handleDeleteItem(item.id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
