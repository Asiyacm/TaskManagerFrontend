import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { TaskSetComponent } from './task-set.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('TaskSetComponent', () => {
  let component: TaskSetComponent;
  let fixture: ComponentFixture<TaskSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,FormsModule], 
      declarations: [ TaskSetComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
      
      
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  

  it('should set the id property', () => {
    const obj = { id: 1 };
    component.changeId.call(obj, 2);
    expect(component.id).toBe(2);
  });


  describe('updateSelection', () => {
    it('should update selectedData array based on the selected ID', () => {
      const testData = [      { id: 1, name: 'Test 1' },      { id: 2, name: 'Test 2' },      { id: 3, name: 'Test 3' },    ];
      component.tableData = testData;
      component.selectedData = [];
  
      // Select ID 1
      component.updateSelection(1);
      expect(component.selectedData).toEqual([{ id: 1, name: 'Test 1' }]);
  
      // Deselect ID 1
      component.updateSelection(1);
      expect(component.selectedData).toEqual([]);
  
      // Select ID 2
      component.updateSelection(2);
      expect(component.selectedData).toEqual([{ id: 2, name: 'Test 2' }]);
  
      // Select ID 3
      component.updateSelection(3);
      expect(component.selectedData).toEqual([
        { id: 2, name: 'Test 2' },
        { id: 3, name: 'Test 3' },
      ]);
    });
  });
  
  
  


  

});