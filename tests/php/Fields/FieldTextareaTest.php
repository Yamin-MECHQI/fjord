<?php

namespace FjordTest\Fields;

use FjordTest\BackendTestCase;
use FjordTest\Traits\InteractsWithFields;
use Fjord\Crud\Fields\Concerns\FieldHasRules;
use Fjord\Crud\Fields\Concerns\FormItemWrapper;
use Fjord\Crud\Fields\Concerns\TranslatableField;
use Fjord\Crud\Fields\Textarea;

class FieldTextareaTest extends BackendTestCase
{
    use InteractsWithFields;

    public function setUp(): void
    {
        parent::setUp();

        $this->field = $this->getField(Textarea::class);
    }

    /** @test */
    public function it_can_have_rules()
    {
        $this->assertHasTrait(FieldHasRules::class, $this->field);
    }

    /** @test */
    public function it_can_be_translatable()
    {
        $this->assertHasTrait(TranslatableField::class, $this->field);
    }

    /** @test */
    public function it_has_form_item_wrapper()
    {
        $this->assertHasTrait(FormItemWrapper::class, $this->field);
    }
}